class OrdersController < ApplicationController

  before_action :require_user

  def index
    @orders = current_user.orders
    render json: @orders
  end
end
