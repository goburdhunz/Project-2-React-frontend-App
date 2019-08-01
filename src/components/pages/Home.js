import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Result from '../results/Result'

class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      searchTerm: '',
      nextOffset: 0,
      list: []
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleKeyUp(e) {
    this.setState({searchTerm: e.target.value})
    console.log(e.target.value)

  }

  handleSubmit(e){
    e.preventDefault()

    axios.get('https://listen-api.listennotes.com/api/v2/search', {
      headers: {
        'X-ListenAPI-Key': '233c3d16ef0d4845ad5a72371d22f970'
      },
      params: {
        q: this.state.searchTerm,
        scope: 'episodes',
        offset: this.state.nextOffset
      }
    })
      .then(res => {
        this.setState({
          list: res.data.results,
          nextOffset: res.data.next_offset
        })
      })
  }


  render() {
    return (
      <section className="section homesection">
        <h1 className="subtitle has-text-weight-bold  is-family-monospace">Search our library of up-to-date podcasts below</h1>
        <div className="container formcontainer">
          <form onInput={this.handleSubmit}>
            <div className="field">
              <div className="control">
                <input
                  className="input searchinput is-size-5"
                  type="search"
                  placeholder="e.g Elon Musk..."
                  onKeyUp={this.handleKeyUp}
                  autoFocus/>
              </div>
            </div>
            <button onClick={this.handleSubmit}><img className="loadmore" src="https://i.gifer.com/9CoY.gif"/></button>
          </form>
        </div>

        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.list.map(result =>
                <div className="column is-half-tablet is-one-third-desktop" key={result.id}>
                  <Link to= {`/searchresults/${result.id}`}>
                    <Result
                      image={result.thumbnail}
                      title={result.title_original}
                      description={result.description_original}
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    )
  }
}


export default Home
