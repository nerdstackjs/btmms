defmodule BusTerminalSystemWeb.PageController do
  use BusTerminalSystemWeb, :controller

  plug(
    BusTerminalSystemWeb.Plugs.RequireAuth
    when action in [
      :index,
      :protected
    ]
  )

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def protected(conn, _) do
    user = Guardian.Plug.current_resource(conn)
    render(conn, "protected.html", current_user: user)
  end

end
