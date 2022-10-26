function CompanyShowcaseComponent() {
    return (
      <div className="grid bg-gray-500/5 grid-rows-3 gap-y-5" > 
       
       <div className="justify-self-center self-end w-4/6"> 
         <h2 className="font-inter text-blue-900 font-semibold">More than 20,000 companies are using our service to hire their employees.</h2>
        </div>

          <div className=" grid grid-cols-5 gap-x-5 content-center items-center justify-self-center w-5/6">
            <a href="https://www.facebook.com" rel="noreferrer" target="_blank"> <img className="w-30" src="/assets/company-showcase-component-assets/facebook.png" alt="Facebook's logo"/> </a>
            <a href="https://www.amazon.com" rel="noreferrer" target="_blank"><img className="w-30" src="/assets/company-showcase-component-assets/amazon.png" alt="Amazon's logo"/></a>
            <a href="https://www.microsoft.com" rel="noreferrer" target="_blank"><img className="w-30" src="/assets/company-showcase-component-assets/microsoft.png" alt="Microsoft's logo"/></a>
            <a href="https://www.apple.com" rel="noreferrer" target="_blank"> <img className="w-30" src="/assets/company-showcase-component-assets/apple.png" alt="Apple's logo"/> </a>
            <a href="https://www.google.com" rel="noreferrer" target="_blank"> <img className="w-30 " src="/assets/company-showcase-component-assets/google.png" alt="Google's logo"/></a>
            </div>

          <div className="grid items-center grid-cols-4 gap-x-5 content-center items-center justify-self-center w-5/6">
            <a href="https://www.airbnb.com" rel="noreferrer" target="_blank"><img className = "w-50" src="/assets/company-showcase-component-assets/airbnb.png" alt="Airbnb's logo"/></a>
            <a href="https://www.spotify.com" rel="noreferrer" target="_blank"><img className = "w-50" src="/assets/company-showcase-component-assets/spotify.png" alt="Spotify's logo"/></a>
            <a href="https://www.yahoo.com" rel="noreferrer" target="_blank"><img className = "w-50" src="/assets/company-showcase-component-assets/yahoo.png" alt="Yahoo's logo"/></a>
            <a href="https://www.netflix.com" rel="noreferrer" target="_blank"><img className = "w-50" src="/assets/company-showcase-component-assets/netflix.png" alt="Netflix's logo"/></a>
          </div>

      </div>
    );
  }
  
  export default CompanyShowcaseComponent;