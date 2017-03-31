class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }

  helper_method :current_user

  private

  def current_user
   @current_user ||= User.find_by(token: params[:token]) if params[:token]
  end

  def require_user
    unless current_user
     render json: ["You need to be logged in to do this."], status: 401
   end
  end

  def current_order
  end
end
