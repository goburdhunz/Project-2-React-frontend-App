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
    axios.get(`https://listen-api.listennotes.com/api/v2/episodes/${this.props.match.params.id}`, {
      headers: {
        'X-ListenAPI-Key': '233c3d16ef0d4845ad5a72371d22f970'
      }
    })
      .then(res => {
        this.setState({pod: res.data})
      })
  }


  render() {
    if (!this.state.pod) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={this.state.pod.image} alt={this.state.pod.title}/>
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="card-header">
          <div className="card-header-title">{this.state.pod.title}</div>
        </div>
        <div className="card-content">
          <p>{this.state.pod.podcast.description}</p>
        </div>

      </section>

    )
  }
}


export default Show
