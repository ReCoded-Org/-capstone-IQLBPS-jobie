function OurCustomers() {
  const detail =
    "I've been working with Jobie for a while now and I'm really happy with the service. I've found it very easy to find a job and I'm really glad that I've found it.";
  return (
    <div className="flex  py-10 justify-center items-center flex-col">
      <h1 className=" text-4xl font-semibold text-blue-900">Our Customers</h1>
      <h1 className=" text-2xl font-semibold text-blue-900">
        We have helped 2,568 users to find their dream job.
      </h1>
      <div className="w-screen h-auto  bg-white flex flex-row justify-center flex-wrap wrap">
        <OurCustomerCard
          props={{
            detail,
            name: "Shady Bot",
            title: "DevOps @ Google",
          }}
        />
        <OurCustomerCard
          props={{
           detail,
            name: "Shady Bot",
            title: "DevOps @ Google",
          }}
        />
        <OurCustomerCard
          props={{
          detail,
            name: "Shady Bot",
            title: "DevOps @ Google",
          }}
        />
      </div>
    </div>
  );
}

function OurCustomerCard({ props }) {
  const image =
    "https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png-300x300.png";
  return (
    <div className=" flex flex-col  p-6 w-96 h-80 bg-white rounded-xl shadow-md  m-10">
      <div className="flex  items-center  flex-row justify-start">
        <div className="w-12 h-12 rounded-full ">
          <img alt="error" src={image} />
        </div>
        <div className="flex flex-col">
          <h1 className=" text-lg font-bold px-4">{props.name}</h1>
          <div className="flex flex-col">
            <h1 className=" text-lg text-blue-900 px-4">{props.title}</h1>
          </div>
        </div>
      </div>
      <h1 className="py-5 text-gray-800">{props.detail}</h1>
      <img
        width={64}
        height={64}
        className="self-end"
        alt="error"
        src="https://www.pngall.com/wp-content/uploads/4/Quotation-Mark-PNG-Picture.png"
      />
    </div>
  );
}

export default OurCustomers;
