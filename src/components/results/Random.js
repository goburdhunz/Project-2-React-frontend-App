import React from 'react'
import axios from 'axios'



class Show extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      podcast: {}
    }

  }

  componentDidMount() {
    axios.get('https://listen-api.listennotes.com/api/v2/just_listen', {
      headers: {
        'X-ListenAPI-Key': '233c3d16ef0d4845ad5a72371d22f970'
      }
    })
      .then(res => {
        this.setState({random: res.data})
      })
  }


  render() {
    if (!this.state.random) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={this.state.random.image} alt={this.state.random.title}/>
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="card-header">
          <div className="card-header-title">{this.state.random.podcast_title}</div>
        </div>
        <div className="card-content">
          <p>{this.state.random.description}</p>
        </div>

      </section>

    )
  }
}


export default Show
