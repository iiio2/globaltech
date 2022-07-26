const Login = () => {
  return (
    <section className='login' id='login'>
      <div className='login-desc'>
        <h4>globaltech company limited</h4>
        <p>Make yourself digitalized & more effecient</p>
      </div>

      <div className='login-body'>
        <div className='login-form'>
          <h4>Welcome</h4>
          <p>Sign in to your account</p>
          <input type='email' name='email' />
          <input type='password' name='password' />
          <button className='btn btn-info'>Login</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
