package controllers

import com.typesafe.config.{ConfigRenderOptions, ConfigFactory}
import play.api.mvc.{Action, Controller}

import scala.util.{Success, Failure, Try}

object Application extends Controller {

  def index = Action {
    Ok(views.html.Index())
  }

  def parseHocon = Action {
    request => {
      val payload = request.body.asText.get
      Try(ConfigFactory parseString payload) match {
        case Success(x) => Ok(x.root().render(ConfigRenderOptions.concise()))
        case Failure(th) => BadRequest(th.getMessage)
      }
    }
  }
  
}
