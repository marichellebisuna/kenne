import React,  {useEffect, useState }  from 'react'
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'

const Team = () => {
 const [isMounted,setIsMounted] = useState(false); // Need this for the react-tooltip

useEffect(() => {
    setIsMounted(true);
    ReactTooltip.rebuild();
},[]);
 return (
  <div className="team-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section_title-2">
                            <h3>Our Team</h3>
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="team-member">
                            <div className="team-thumb img-hover_effect">
                             <Link href="#">
                                <a >
                                    <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/about-us/team/1.jpg" alt="Our Team Member"/>
                                </a>
                                </Link>
                            </div>
                            <div className="team-content text-center">
                                <h3>Edwin Adams</h3>
                                <p>IT Expert</p>
                                <a href="#">info@example.com</a>
                                <div className="kenne-social_link">
                                    <ul>
                                        <li className="facebook">
                                         {isMounted && <ReactTooltip id={"Facebook"} className="facebook" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.facebook.com" data-tip="Facebook" target="_blank" title="Facebook" data-for={"Facebook"}>
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                            
                                        </li>
                                        <li className="twitter">
                                        {isMounted && <ReactTooltip id={"Twitter"} className="twitter" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://twitter.com" data-tip="Twitter" target="_blank" title="Twitter" data-for={"Twitter"}>
                                                <i className="fab fa-twitter-square"></i>
                                            </a>
                                        </li>
                                        <li className="youtube">
                                        {isMounted && <ReactTooltip id={"Youtube"} className="youtube" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.youtube.com" data-tip="Youtube" target="_blank" title="Youtube" data-for={"Youtube"}>
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li className="google-plus">
                                        {isMounted && <ReactTooltip id={"Google Plus"} className="google-plus" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.plus.google.com/discover" data-tip="Google Plus" target="_blank" title="Google Plus" data-for={"Google Plus"}>
                                                <i className="fab fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li className="instagram">
                                        {isMounted && <ReactTooltip id={"Instagram"} className="instagram" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://rss.com" data-tip="Instagram" target="_blank" title="Google Plus" data-for={"Instagram"}>
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="team-member">
                            <div className="team-thumb img-hover_effect">
                            <Link href="#">
                                <a >
                                    <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/about-us/team/2.jpg" alt="Our Team Member"/>
                                </a>
                                </Link>
                            </div>
                            <div className="team-content text-center">
                                <h3>Anny Adams</h3>
                                <p>Web Designer</p>
                                <a href="#">info@example.com</a>
                                <div className="kenne-social_link">
                                <ul>
                                        <li className="facebook">
                                         {isMounted && <ReactTooltip id={"Facebook"} className="facebook" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.facebook.com" data-tip="Facebook" target="_blank" title="Facebook" data-for={"Facebook"}>
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                            
                                        </li>
                                        <li className="twitter">
                                        {isMounted && <ReactTooltip id={"Twitter"} className="twitter" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://twitter.com" data-tip="Twitter" target="_blank" title="Twitter" data-for={"Twitter"}>
                                                <i className="fab fa-twitter-square"></i>
                                            </a>
                                        </li>
                                        <li className="youtube">
                                        {isMounted && <ReactTooltip id={"Youtube"} className="youtube" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.youtube.com" data-tip="Youtube" target="_blank" title="Youtube" data-for={"Youtube"}>
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li className="google-plus">
                                        {isMounted && <ReactTooltip id={"Google Plus"} className="google-plus" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.plus.google.com/discover" data-tip="Google Plus" target="_blank" title="Google Plus" data-for={"Google Plus"}>
                                                <i className="fab fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li className="instagram">
                                        {isMounted && <ReactTooltip id={"Instagram"} className="instagram" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://rss.com" data-tip="Instagram" target="_blank" title="Google Plus" data-for={"Instagram"}>
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="team-member">
                            <div className="team-thumb img-hover_effect">
                            <Link href="#">
                                <a >
                                    <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/about-us/team/3.jpg" alt="Our Team Member"/>
                                </a>
                                </Link>
                            </div>
                            <div className="team-content text-center">
                                <h3>Edvin Adams</h3>
                                <p>Content Writer</p>
                                <a href="javascript:void(0)">info@example.com</a>
                                <div className="kenne-social_link">
                                <ul>
                                        <li className="facebook">
                                         {isMounted && <ReactTooltip id={"Facebook"} className="facebook" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.facebook.com" data-tip="Facebook" target="_blank" title="Facebook" data-for={"Facebook"}>
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                            
                                        </li>
                                        <li className="twitter">
                                        {isMounted && <ReactTooltip id={"Twitter"} className="twitter" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://twitter.com" data-tip="Twitter" target="_blank" title="Twitter" data-for={"Twitter"}>
                                                <i className="fab fa-twitter-square"></i>
                                            </a>
                                        </li>
                                        <li className="youtube">
                                        {isMounted && <ReactTooltip id={"Youtube"} className="youtube" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.youtube.com" data-tip="Youtube" target="_blank" title="Youtube" data-for={"Youtube"}>
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li className="google-plus">
                                        {isMounted && <ReactTooltip id={"Google Plus"} className="google-plus" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.plus.google.com/discover" data-tip="Google Plus" target="_blank" title="Google Plus" data-for={"Google Plus"}>
                                                <i className="fab fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li className="instagram">
                                        {isMounted && <ReactTooltip id={"Instagram"} className="instagram" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://rss.com" data-tip="Instagram" target="_blank" title="Google Plus" data-for={"Instagram"}>
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="team-member">
                            <div className="team-thumb img-hover_effect">
                            <Link href="#">
                                <a >
                                    <img src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/about-us/team/4.jpg" alt="Our Team Member"/>
                                </a>
                                </Link>
                            </div>
                            <div className="team-content text-center">
                                <h3>Eddy Adams</h3>
                                <p>Marketing officer</p>
                                <a href="#">info@example.com</a>
                                <div className="kenne-social_link">
                                <ul>
                                        <li className="facebook">
                                         {isMounted && <ReactTooltip id={"Facebook"} className="facebook" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.facebook.com" data-tip="Facebook" target="_blank" title="Facebook" data-for={"Facebook"}>
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                            
                                        </li>
                                        <li className="twitter">
                                        {isMounted && <ReactTooltip id={"Twitter"} className="twitter" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://twitter.com" data-tip="Twitter" target="_blank" title="Twitter" data-for={"Twitter"}>
                                                <i className="fab fa-twitter-square"></i>
                                            </a>
                                        </li>
                                        <li className="youtube">
                                        {isMounted && <ReactTooltip id={"Youtube"} className="youtube" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.youtube.com" data-tip="Youtube" target="_blank" title="Youtube" data-for={"Youtube"}>
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li className="google-plus">
                                        {isMounted && <ReactTooltip id={"Google Plus"} className="google-plus" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://www.plus.google.com/discover" data-tip="Google Plus" target="_blank" title="Google Plus" data-for={"Google Plus"}>
                                                <i className="fab fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li className="instagram">
                                        {isMounted && <ReactTooltip id={"Instagram"} className="instagram" backgroundColor="#a8741a" arrowColor="#a8741a" clickable={true}/> }
                                            <a href="https://rss.com" data-tip="Instagram" target="_blank" title="Google Plus" data-for={"Instagram"}>
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
 )
}

export default Team
