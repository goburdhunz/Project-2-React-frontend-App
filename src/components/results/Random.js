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
        'X-ListenAPI-Key': process.env.LISTEN_NOTES_API_KEY
      }
    })
      .then(res => {
        this.setState({random: res.data})
      })
  }


  render() {
    if (!this.state.random) return null
    console.log(this.state.random.audio)
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column randomcard is-half-tablet is-one-quarter">

              <div className="card cardinfo">
                <div className="card-image">
                  <figure className="image">
                    <img src={this.state.random.thumbnail} alt={this.state.random.title}/>
                  </figure>
                  <audio className="audio" controls="controls" src={this.state.random.audio}></audio>
                </div>

                <div className="card-header">
                  <div className="card-header-title">{this.state.random.podcast_title}</div>
                </div>

                <div className="card-content">
                  <p className="has-text-left-widescreen">{this.state.random.description}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    )
  }
}


export default Show
