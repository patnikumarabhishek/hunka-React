import React from 'react'
import { Link } from 'react-router-dom'
const Vacancies = () => {
    return (
        <section className="middle_wraper">
            {/* <div className="banner_area ">
            <div className="banner_inner overlay d-flex align-items-center">
                <div className="container">
                <div className="banner_content text-left">
                    <div className="page_link"> <a href="index.html">Home</a> <a href="#">Vacancies</a> </div>
                    <h2>Vacancies</h2>
                </div>
                </div>
            </div>
            </div> */}
            <div className="vacancies">
                <div className="container">
                    {/* <!--Table--> */}
                    <table className="table  w-auto table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Role</th>
                                <th>Location</th>
                                <th>Required</th>
                                <th>Apply</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>IBM Datastage (ETL Developer)</td>
                                <td>Remoto desde México, México</td>
                                <td><p>Pure standard ETL development experience 5 to 7 years' experience Very good communication oral and written skills. Pure standard ETL development experience 5 to 7 years' experience Very good communication oral and written skills. Mainly DataStage developers that can take requirement on raw data and produce the consumable data based on the requirement ,</p></td>
                                <td>
                                    <div className="request_demo ">  <Link to='/vacancy-detail'> View More </Link> </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Java Developer to work in the US</td>
                                <td>Virginia, USA</td>
                                <td><p>Se requieren 4 años de experiencia en desarrollo java en aplicaciones web, conceptos fuertes en programación orientada a objetos, Java Core / Java EE, SQL, Web Services y JavaScript. Capacidad analítica, trabajo en equipo y ... Se requieren 4 años de experiencia en desarrollo java en aplicaciones web, conceptos fuertes en programación orientada a objetos, Java Core / Java EE, SQL, Web Services y JavaScript. Capacidad analítica, trabajo en equipo y buen nivel de comunicación en inglés. Es bueno además tener Microservices, SpringBoot, CICD, Docker, Kubernetes, Angular 2+/ React.js, CSS/HTML, Node.Js, AWS/Azure/GoogleCloud. Es indispensable tener título y cédula. El proceso es de dos entrevistas con el cliente. Es para trabajar inicialmente en remoto y posteriormente cambiar de residencia a Virginia USA. Tope Salarial: MXN45,000 brutos en esquema 100x100 nómina o libres en mixto Viáticos: de lo equivalente en pesos de USD3450 mensuales cuando se esté en Virginia, ya que inicialmente es en remoto en lo que se puede tramitar la visa. On hold for the moment --- Se buscan a 10 personas con el mismo rol de Desarrollador Java.</p></td>
                                <td>
                                    <div className="request_demo "> <Link to='/vacancy-detail'>View More </Link> </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>IT roles to be based in Guadalajara</td>
                                <td>Remote and after in Guadalajara, México</td>
                                <td><p>Role: Backend Engineer ● You talk Java, you love Spring, you like microservices and you have more than five years' experience with integration patterns and frameworks (Apache Camel, Spring Integration). ● You're a team</p></td>
                                <td>
                                    <div className="request_demo ">  <Link to='/vacancy-detail'> View More </Link> </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Automation Developer con C#</td>
                                <td>Remoto, México</td>
                                <td><p>Excellent C# coding skills Familiar with the Page-Object design patter (advantage) Familiar with Selenium WebDriver (advantage) Familiar with Microsoft CodedUI (advantage) Team player Fast and enthusiastic learner Willing to ... Excellent C# coding skills Familiar with the Page-Object design patter (advantage) Familiar with Selenium WebDriver (advantage) Familiar with Microsoft CodedUI (advantage) Team player Fast and enthusiastic learner Willing to work hard and conquer unknown territories Required 2+ years of experience working as an Automation Developer and conversational english, so as to be hired with global consultancy, working with US clients.</p></td>
                                <td>
                                    <div className="request_demo ">  <Link to='/vacancy-detail'> View More </Link> </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Peoplesoft Administrators and HCM PY/BF</td>
                                <td> 	Remote from México, México</td>
                                <td><p>PeopleSoft Administrator with 5-7 yrs. of experience --- 2 OPENINGS -PeopleSoft Administrator with 8-9 yrs. of experience --- 1 OPENINGS -PeopleSoft HCM Payroll & Benefits 7-9 yrs. of experience --- 1 OPENINGS For administr ... -PeopleSoft Administrator with 5-7 yrs. of experience --- 2 OPENINGS -PeopleSoft Administrator with 8-9 yrs. of experience --- 1 OPENINGS -PeopleSoft HCM Payroll & Benefits 7-9 yrs. of experience --- 1 OPENINGS For administrators top skills: App Designer, People Code, App engine, CI, IB, SQR, Process Scheduler, XML Publisher, Excel to CI For HCM Payroll & Benefits top skills: PeopleSoft HCM, Benefits and North America Payroll. Must have good knowledge of technical tools delivered by PeopleSoft including App Designer, People Code, App engine, CI, IB, SQR, Process Scheduler, XML Publisher, Excel to CI All need strong/good English communication skills We are primarily looking for PeopleSoft Administrators with different levels of experience + one profile for Payroll/Benefits</p></td>
                                <td>
                                    <div className="request_demo ">  <Link to='/vacancy-detail'> View More </Link> </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <!--Table--> */}
                </div>
            </div>
        </section>
    )
}

export default Vacancies