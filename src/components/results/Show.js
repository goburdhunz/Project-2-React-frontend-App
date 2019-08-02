import React from 'react'
import axios from 'axios'



class Show extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      pod: {}
    }
  }

  componentDidMount() {
    axios.get(`https://listen-api.listennotes.com/api/v2/episodes/${this.props.match.params.id}`, {
      headers: {
        'X-ListenAPI-Key': process.env.LISTEN_NOTES_API_KEY
      }
    })
      .then(res => {
        this.setState({pod: res.data})
      })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column randomcard is-half-tablet is-one-quarter">

              <div className="card cardinfo">
                <div className="card-image">
                  <figure className="image">
                    <img src={this.state.pod.image} alt={this.state.pod.title}/>
                  </figure>
                  <audio className="audio" controls="controls" src={this.state.pod.audio}></audio>
                </div>

                <div className="card-header">
                  <div className="card-header-title">{this.state.pod.title}</div>
                </div>

                <div className="card-content">
                  <p>{this.state.pod.description}</p>
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
