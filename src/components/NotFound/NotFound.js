import NotFoundImg from '../../images/404.gif';

const NotFound = () => {
    return (
        <div>
<h1 style={{color:'red',textAlign:'center',marginTop:'180px'}}>Invaild Page, Please try again</h1>
  <img className="rounded mx-auto d-block" style={{height:'200px'}} src={NotFoundImg} alt=""></img>
       </div>
    );
};

export default NotFound;