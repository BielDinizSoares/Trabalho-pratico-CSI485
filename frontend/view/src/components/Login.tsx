import styles from './Login.module.css'

export function Login() {
  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder='email'/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder='password'/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
