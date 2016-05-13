package controllers

import com.typesafe.config.{ConfigFactory, ConfigRenderOptions}
import play.api.libs.json.JsValue
import play.api.mvc.{Action, Controller}

import scala.util.{Failure, Success, Try}

object Application extends Controller {

  def index = Action {
    Ok(views.html.Index())
  }

  def parseHocon = Action {
    request => {
      println("request recieved")
      val payload: JsValue = request.body.asJson.get
      val data = (payload \ "message").as[String]
      Try(ConfigFactory parseString data) match {
        case Success(x) => Ok(x.root().render(getRenderOptions))
        case Failure(th) => BadRequest(th.getMessage);
      }
    }
  }


  def getRenderOptions = {
   val options = ConfigRenderOptions.defaults()
    options.setComments(false).setFormatted(true).setJson(true).setOriginComments(false)
  }


  
}
