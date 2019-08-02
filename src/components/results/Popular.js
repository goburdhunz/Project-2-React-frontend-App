import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Result from './Result'



class Popular extends React.Component {


  constructor() {
    super()
    this.state = {
      popular: []
    }
  }


  componentDidMount() {
    axios.get('https://listen-api.listennotes.com/api/v2/best_podcasts', {
      headers: {
        'X-ListenAPI-Key': process.env.LISTEN_NOTES_API_KEY
      }
    })
      .then(res => {
        this.setState({
          popular: res.data.podcasts

        })
      })
  }


  render() {
    if (!this.state.popular) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.popular.map(best =>
              <div className="column is-half-tablet is-one-third-desktop" key={best.id}>
                <Link to= {`/popular_podcasts/${best.id}`}>
                  <Result
                    image={best.image}
                    title={best.title}
                    description={best.description}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }




















}

export default Popular
