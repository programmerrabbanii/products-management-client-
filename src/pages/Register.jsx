import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
          <div className="card bg-base-100 w-8/12 mx-auto shrink-0 shadow-2xl">
          <h1 className="text-3xl font-semibold text-center mt-10">Register Now</h1>
            <form className="card-body">

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div>
                <p className="text-center mt-4"> already you have an acount pleass <Link className="text-red-600 font-semibold" to='/login'>Login</Link></p>
            </div>
          </div>
        </div>
  );
};

export default Register;
