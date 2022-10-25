function CompanyShowcaseComponent() {
    return (
      <div className="bg-gray-500/5"> 
        <p className="font-inter text-dark-gray">More than 20,000 companies are using our service to hire their employees.</p>
       
        <section className=" flex flex-col">
         
          <div className="flex flex-row w-full">
            <a href="https://www.facebook.com" rel="noreferrer" target="_blank"> <img className="shrink " src="/assets/company-showcase-component-assets/facebook.png" alt="Facebook's logo"/> </a>
            <a href="https://www.amazon.com" rel="noreferrer" target="_blank"><img className="shrink" src="/assets/company-showcase-component-assets/amazon.png" alt="Amazon's logo"/></a>
            <a href="https://www.microsoft.com" rel="noreferrer" target="_blank"><img className="shrink" src="/assets/company-showcase-component-assets/microsoft.png" alt="Microsoft's logo"/></a>
            <a href="https://www.apple.com" rel="noreferrer" target="_blank"> <img className="shrink" src="/assets/company-showcase-component-assets/apple.png" alt="Apple's logo"/> </a>
            <a href="https://www.google.com" rel="noreferrer" target="_blank"> <img className="shrink " src="/assets/company-showcase-component-assets/google.png" alt="Google's logo"/></a>
            </div>

          <div className="flex flex-row object-contain w-full">
            <img className="shrink w-1/4" src="/assets/company-showcase-component-assets/airbnb.png" alt="Airbnb's logo"/>
            <img className="shrink w-1/4" src="/assets/company-showcase-component-assets/spotify.png" alt="Spotify's logo"/>
            <img className="shrink w-1/4" src="/assets/company-showcase-component-assets/yahoo.png" alt="Yahoo's logo"/>
            <img className="shrink w-1/4" src="/assets/company-showcase-component-assets/netflix.png" alt="Netflix's logo"/>
          </div>

        </section>
      </div>
    );
  }
  
  export default CompanyShowcaseComponent;