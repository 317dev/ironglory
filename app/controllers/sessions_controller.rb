class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])&.authenticate(params[:password])
    if @user
      render json: @user, Serializer: UserExpandedSerializer
    else
      render json: ["Incorrect"], status: 401
  end
end
