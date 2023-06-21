import linkedin from "../assets/linkedin.png"

const SocialMediaIcons= ()=>{
    return (
<div className="flex justify-center md:justify-start my-10 gap-7">
<a
className="hover:opacity-50 transition duration-500"
href="http://www.linkedin.com"
target="_blank" // open in new tab
rel="noreferrer" // prevent security issues over browser
>
<img alt="linkedin-link" src={linkedin}/>

</a>
<a
className="hover:opacity-50 transition duration-500"
href="http://www.github.com"
target="_blank" // open in new tab
rel="noreferrer" // prevent security issues over browser
>
<img alt="github-link" src={linkedin}/>

</a>
<a
className="hover:opacity-50 transition duration-500"
href="http://www.leetcode.com"
target="_blank" // open in new tab
rel="noreferrer" // prevent security issues over browser
>
<img alt="leetcode-link" src={linkedin}/>

</a>


</div>

    );
}
export default SocialMediaIcons;