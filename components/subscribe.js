import React, { useState } from 'react'
import axios from 'axios'

class ErrorState extends React.Component {
  render() {
    return null;
  }
}

class SuccessState extends React.Component {
  render() {
    return null;
  }
}

function Subscribe() {

  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setState('Loading')

    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log(response)
      setState('Success')
      setEmail('')
    } catch (e) {
      console.log(e.response.data.error)
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <div>
      <h4 className="sub-header">Subscribe to the newsletter</h4>
      <p className="sub-text">
        Get to notified on quality articles about frontend development and more
        sent to your inbox. I'll send you an email once a month, no spam.
      </p>
      <form onSubmit={subscribe}>
        <div>
          <div className="form-input">
            <input
              required
              id="email-input"
              name="email"
              type="email"
              placeholder="What's your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="sub-form-btn">
            <button
              disabled={state === 'Loading'}
              type="submit"
              className="form-btn"
              onClick={subscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
        {state === 'Error' && (
          <ErrorState className="error-state">{errorMsg}</ErrorState>
        )}
        {state === 'Success' && (
          <SuccessState>Awesome, you've been subscribed!</SuccessState>
        )}
      </form>
    </div>
  )
}

export default Subscribe