import style from "./ProfileInfo.module.css";
import contentimg from "../../../assets/my images/content.jpg";
import userimg from "../../../assets/my images/user.jpg";

const ProfileInfo = () => {
    return (

        <div>
            <div className={style.contentImg}>
                <img src={contentimg}/>
            </div>
            <div className={style.content}>
                <img src={userimg}/>
            </div>
        </div>
    );
}
export default ProfileInfo;