import { useParams } from "react-router-dom";
import '../About/About.css'
import leftDetail from "./leftDetail.comp";
import rightDetail from './rightDetail.comp'
import Content from "./Content.comp";
import Contact from "./Contact.comp";

const Detail = () => {
  const params = useParams();
  return (
    <div className="Overall-component">
          <div className="Both-side">
            <leftDetail/>
            <Content/>
          </div>
          <div>
          <rightDetail/>
          </div>
          <div>
        <Contact/>
          </div>
      </div>
  );
};
export default Detail;