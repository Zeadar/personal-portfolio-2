import "./ProjectBox.css"

export default function ProjectBox({ link, desc, img }) {
    const checkedImg = img ? img : "https://i.imgur.com/7H71l4X.jpeg"
    return (
        <div className="Box">
            <div className="Link">
                <a href={link}>To Github</a>
            </div>
            <img className="Image" src={checkedImg} alt="" />
            <div className="Space"></div>
            <div className="Desc">
                <span>{desc}</span>
            </div>
        </div>
    )
}
