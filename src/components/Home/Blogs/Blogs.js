import React from "react";

const Blogs = () => {
  return (
    <div className="row white-color">
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh", textDecoration: "none" }}
      >
        <ul className="list-unstyled mt-3">
          <h1>See </h1>
          <li>
            <a
              style={{ textDecoration: "none", color: "#1cc7c1" }}
              href="#array_find"
            >
              Array find()
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "#1cc7c1" }}
              href="#array_filter"
            >
              Array filter()
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "#1cc7c1" }}
              href="#number_toFixed"
            >
              Number toFixed()
            </a>
          </li>
        </ul>
      </div>
      <div style={{ borderLeft: "2px dotted gold" }} className="col-md-8  mt-3">
        <div id="array_find" className="white-color mt-3">
          <h1 style={{ borderBottom: "1px solid white", color: "#1cc7c1" }}>
            BLOGS
          </h1>
          <h4 style={{ color: "#f13ff1" }}>Array find()</h4>
          <p className="">
            The find method returns the value in the array ...behind or forward
            position number and string value. But if u input any number or
            string the value that is not the possibility to the array less or
            greater than that result is undefined <br />
            <p className="mt-3">For Example</p>
            <p>
              const numbers = [100, 120, 70, 130, 450]; <br />
              const numbers = numbers.find(number=> number > 70); <br />
              console.log(numbers); <br />
              // Output result: 100
            </p>
            <p>
              const numbers = [100, 120, 70, 130, 450]; <br />
              const numbers = numbers.find(number=> number > 450); <br />
              console.log(numbers); <br />
              <p>
                // Output result:{" "}
                <span style={{ color: "gray" }}> undefined </span>
              </p>
            </p>
          </p>
        </div>
        <div id="array_filter" className="white-color mt-5">
          <h4 style={{ color: "#f13ff1" }}>Array filter()</h4>
          <p className="">
            The filter method is filtering array to find out the value of array
            which you input to the filter method, for example, length, position,
            less, greater, lowercase, uppercase, positive, negative, a small
            number, a big number, etc <br />
          </p>
          <p className="mt-3">For Example</p>
          <p>
            const divisions = ['Sylhet', 'Dhaka', 'Chittagong', 'Mymensingh',
            'Khulna', 'Rajshahi', 'Rangpur', 'Barishal ']; <br />
            const result = divisions.filter(division => division.length > 8);{" "}
            <br />
            console.log(result); <br />
            // Output result: Array ["Chittagong", "Mymensingh", "Barishal "]
          </p>
          <p>
            const divisions = ['Sylhet', 'Dhaka', 'Chittagong', 'Mymensingh',
            'Khulna', 'Rajshahi', 'Rangpur', 'Barishal ']; <br />
            const result = divisions.filter(division => division.length > 6);{" "}
            <br />
            console.log(result); <br />
            // Output result: Array ["Dhaka"]
          </p>
        </div>
        <div id="number_toFixed" className="white-color mt-5">
          <h4 style={{ color: "#f13ff1" }}>Number toFixed()</h4>
          <p className="mt-3">
            The toFixed method is a method of how many numbers are slowing after
            point and its slowing number after the pointer which is declared
            toFixed method. <br />
          </p>
          <p className="mt-3">For Example</p>
          <p>
            const doMath =(x, y)=> {`const sum = x / y; return result;`} const
            result = doMath(15, 7).toFixed(2); console.log(result); // Output
            result: 2.14
          </p>
          <p>
            function math(x) {`return Number.parseFloat(x).toFixed(2);`}
            console.log(math(123.456)); //Output result: "123.46"
            console.log(math(0.004)); //Output result: "0.00" const
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
const a = 50;
const b = 3;
