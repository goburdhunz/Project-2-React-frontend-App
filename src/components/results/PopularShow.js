import React from 'react'
import axios from 'axios'



class PopularShow extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      popular: []
    }
  }

  componentDidMount() {
    axios.get(`https://listen-api.listennotes.com/api/v2/podcasts/${this.props.match.params.id}`, {
      headers: {
        'X-ListenAPI-Key': process.env.LISTEN_NOTES_API_KEY
      }
    })
      .then(res => {
        this.setState({popular: res.data.episodes})
      })
  }


  render() {
    if (!this.state.popular) return null
    console.log(this.state.popular)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">

            {this.state.popular.map(episode =>
              <div className="column is-half-tablet is-one-quarter-desktop" key={episode.id}>

                <div className="card cardinfo">
                  <div className="card-image">
                    <figure className="image">
                      <img src={episode.image} alt={episode.title}/>
                    </figure>
                    <audio className="audio" controls="controls" src={episode.audio}></audio>
                  </div>

                  <div className="card-header">
                    <div className="card-header-title">{episode.title}</div>
                  </div>

                  <div className="card-content">
                    <p>{episode.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}


export default PopularShow
