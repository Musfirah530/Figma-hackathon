export default function JoinUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
  {/* Center Section: Navigation Links */}
  <ul className={`hidden md:flex space-x-8 rtl:space-x-reverse font-medium`}>
          <li><a href="#" className="text-gray-700 ">New & Featured</a></li>
          <li><a href="#" className="text-gray-700 ">Men</a></li>
          <li><a href="#" className="text-gray-700 ">Women</a></li>
          <li><a href="#" className="text-gray-700 ">Kids</a></li>
          <li><a href="#" className="text-gray-700 ">Sale</a></li>
          <li><a href="#" className="text-gray-700 ">SNKRS</a></li>
        </ul>
      {/* Header */}
      <div className="text-center mt-10">
        <img
          src="/images/logo/logo (1).svg"
          alt="Nike Logo"
          className="mx-auto mb-4 w-12 h-12"
        />
        <h1 className="text-3xl font-bold mb-2">BECOME A NIKE MEMBER</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>
      </div>

      {/* Form */}
      <form className="mt-8 w-full max-w-md">
        {/* Email Address */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
            required
          />
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          />
          <p className="mt-1 text-xs text-gray-500">
            Get a special birthday surprise when you sign up for a Nike
            Membership.
          </p>
        </div>

        {/* Country Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            id="country"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          >
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>
        </div>

        {/* Gender Radio */}
        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-700">Gender</span>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                className="h-4 w-4 text-black border-gray-300"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="h-4 w-4 text-black border-gray-300"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        {/* Checkbox */}
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-black border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          JOIN US
        </button>

        {/* Already a Member */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Already a Member?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
