const root = document.getElementById("root"); 

const body = ( 
  <div className="container">
    <header>
      <div className="left">
        <h2>عبدالله محمد آلمعدي</h2>
        <p>0537355022</p>
        <p>adbahtmeme5060@gmail.com</p>
      </div>
      <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"/>
    </header>
    <div className="content">
       <div className="left">
          <div className="title">Profile</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum totam eius neque, rem eligendi modi error eos a obcaecati cupiditate voluptas repellendus ex possimus deserunt iure doloremque? Recusandae, natus perferendis?</p>
          <div className="skils">
            <p>Next.js</p>
            <p>React</p>
            <p>Scss</p>
            <p>Git</p>
            <p>Firebase</p>
            <p>Typescript</p>
          </div>
       </div>
       <div className="right">
          <div className="title">Work Experience</div>
        <div className="row">
          <div className="head">
            <h3>company</h3>
            <h6>2020 - 2021</h6>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente iusto quidem libero id voluptatibus earum recusandae asperiores, facere exercitationem, ratione repudiandae in, voluptatem optio officia possimus iste et saepe.</p>
        </div>
        <div className="row">
          <div className="head">
            <h3>company</h3>
            <h6>2019 - 2020</h6>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente iusto quidem libero id voluptatibus earum recusandae asperiores, facere exercitationem, ratione repudiandae in, voluptatem optio officia possimus iste et saepe.</p>
        </div>
        <div className="row">
          <div className="head">
            <h3>company</h3>
            <h6>2016 - 2018</h6>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente iusto quidem libero id voluptatibus earum recusandae asperiores, facere exercitationem, ratione repudiandae in, voluptatem optio officia possimus iste et saepe.</p>
        </div>
       </div>
    </div>
  </div>
)

ReactDOM.render(body, root);