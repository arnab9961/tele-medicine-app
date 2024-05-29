import { Link, useNavigate } from 'react-router-dom';

export default function SlideBar() {
  const navigate = useNavigate();

  const handleExternalLink = (url) => {
    window.location.href = url;
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-white/30 backdrop-blur-lg text-base-content">
          <li>
            <button onClick={() => handleExternalLink("https://medicine-recommend.streamlit.app/")}>
              Medicine Recommend System
            </button>
          </li>
          <li>
          <button onClick={() => handleExternalLink("https://huggingface.co/spaces/arnab9961/healthcare_chatbot")}>
              Health Care Chatbot
            </button>
            
          </li>
        </ul>
      </div>
    </div>
  );
}
