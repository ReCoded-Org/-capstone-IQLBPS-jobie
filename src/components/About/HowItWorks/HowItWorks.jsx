import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useTranslation } from "react-i18next";
import {
  faFileLines,
  faHandshake,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

function HowItWorks() {
  const {t} = useTranslation();
  return (
    <div className="container px-20 ">
      <div>
        <h1 className="text-left text-5xl font-inter text-secondary py-10 font-bold">
          {t('how-it-works')}
        </h1>
      </div>
      <div className="text-left flex justify-center flex-nowrap content-center text- font-inter gap-20 small:flex-col small:items-center medium:flex-col pb-9">
        <div className=" ">
          <div className="rounded-full bg-dark-gray h-16 w-16 flex items-center justify-center ">
            <FontAwesomeIcon
              icon={faFileLines}
              className="text-3xl text-accent"
            />
          </div>
          <h1 className="text-3xl py-3 small:text-left">{t('create-your-resume')} </h1>
          <p className="text-justify small:text-justify small:text-xl">
            
            {t('creating-resume-details')}
          </p>
        </div>
        <div className=" ">
          <div className="rounded-full bg-dark-gray h-16 w-16 flex items-center justify-center">
            <FontAwesomeIcon icon={faPen} className="text-3xl text-accent" />
          </div>
          <h1 className="text-3xl py-3 small:text-left">{t('apply-for-jobs')}</h1>
          <p className="text-justify small:text-justify small:text-xl">
           {t('job-application-details')} 
          </p>
        </div>
        <div className=" ">
          <div className="rounded-full bg-secondary h-16 w-16 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-3xl text-accent"
            />
          </div>
          <h1 className="text-3xl py-3">{t('get-hired')}</h1>
          <p className="text-justify small:text-justify small:text-xl">
          {t('getting-hired')}
           
          </p>
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;
