const Sign = () => {
  const handleRegister = (e) => {
    e.preventDEfault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    // <div>
    //   <form onSubmit={handleRegister}>
    //     <input type="text" name="name" placeholder="name" />
    //     <input type="email" name="email" placeholder="email" />
    //     <input type="password" name="password" placeholder="password" />
    //     <button className="btn">SignUp</button>
    //   </form>
    // </div>

    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block min-h-[90vh] login_banner bg-cover bg-center">
        <div className="hero-overlay bg-opacity-60">
          <div className="pt-72 lg:pt-80">
            <h1 className="text-white text-center text-3xl font-bold">
              Welcome to EquiJuris
            </h1>
          </div>
        </div>
      </div>
      <div
        className={`py-36 lg:py-70 bg-[url('https://i.ibb.co/vL9HCtH/scale02.jpg')] lg:bg-none bg-opacity-60 bg-cover bg-center lg:bg-[#161D27] text-white`}
      >
        <h1 className="text-center text-[#D1B06B] mb-5  text-3xl pb-5  font-bold">
          Sign Up Here
        </h1>
        <form onSubmit={handleRegister} className="flex flex-col w-3/4 mx-auto">
          <input type="text" placeholder="email" name="name" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" name="signup" value="signup" />
        </form>
      </div>
    </div>
  );
};

export default Sign;
