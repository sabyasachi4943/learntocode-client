import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>what is cors?</Accordion.Header>
        <Accordion.Body>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </Accordion.Header>
        <Accordion.Body>
          Indeed, Firebase is a less technical and time-saving alternative to
          writing full-fledged backend code for dynamic apps. You might also
          want to consider leveraging this tool if you eventually wish to host
          and manage your app in the cloud. Being serverless, Firebase removes
          the need to worry about the technicalities of cloud server
          configuration. As a Google Cloud service, it also gives you access to
          other Google products and features, like Google Drive and Sheets. For
          instance, you can import dummy data from Google Sheets and use it
          temporarily to serve your app.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does the private route work?</Accordion.Header>
        <Accordion.Body>
          The react private route component renders a route component if the
          user is logged in and in an authorized role for the route, if the user
          isn't logged in they're redirected to the /login page, if the user is
          logged in but aren't in an authorized role they're redirected to the
          home page.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
          Node.js is an open-source backend javascript runtime environment. It
          is a used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive. <br /> Working of Node.js: Node.js accepts the request from
          the clients and sends the response, while working with the request
          node.js handles them with a single thread. To operate I/O operations
          or requests node.js use the concept of threads. Thread is a sequence
          of instructions that the server needs to perform. It runs parallel on
          the server to provide the information to multiple clients. Node.js is
          an event loop single-threaded language. It can handle concurrent
          requests with a single thread without blocking it for one request. <br />
          Node.js basically works on two concept <br /> Asynchronous <br /> Non-blocking I/O
           <br /> Non-blocking I/o: Non-blocking i/o means working with multiple
          requests without blocking the thread for a single request. I/O
          basically interacts with external systems such as files, databases.
          Node.js is not used for CPU-intensive work means for calculations,
          video processing because a single thread cannot handle the CPU works. <br />
          Asynchronous: Asynchronous is executing a callback function. The
          moment we get the response from the other server or database it will
          execute a callback function. Callback functions are called as soon as
          some work is finished and this is because the node.js uses an
          event-driven architecture. The single thread doesn't work with the
          request instead it sends the request to another system which resolves
          the request and it is accessible for another request. <br /> To implement the
          concept of the system to handle the request node.js uses the concept
          of Libuv. <br /> Libuv is an open-source library built-in C. It has a strong
          focus on asynchronous and I/O, this gives node access to the
          underlying computer operating system, file system, and networking. <br />
          Libuv implements two extremely important features of node.js Event
          loop Thread pool Event loop: The event loop contains a single thread
          and is responsible for handling easy tasks like executing callbacks
          and network I/O. When the program is to initialize all the top-level
          code is executed, the code is not in the callback function. All the
          applications code that is inside callback functions will run in the
          event loop. EventLoop is the heart of node.js. When we start our node
          application the event loop starts running right away. Most of the work
          is done in the event loop. Nodejs use event-driven-architecture.
          Events are emitted. Event loop picks them up. Callbacks are called.
          Event queue: As soon as the request is sent the thread places the
          request into a queue. It is known as an event queue. The process like
          app receiving HTTP request or server or a timer will emit event as
          soon as they are done with the work and event loop will pick up these
          events and call the callback functions that are associated with each
          event and response is sent to the client. The event loop is an
          indefinite loop that continuously receives the request and processes
          them. It checks the queue and waits for the incoming request
          indefinitely. Thread pool: Though node.js is single-threaded it
          internally maintains a thread pool. When non-blocking requests are
          accepted there are processed in an event loop, but while accepting
          blocking requests it checks for available threads in a thread pool,
          assigns a thread to the client's request which is then processed and
          send back to the event loop, and response is sent to the respective
          client. The thread pool size can be change:
          process.env.UV_THREADPOOL_SIZE = 1;
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;
