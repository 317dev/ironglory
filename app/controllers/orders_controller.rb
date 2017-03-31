class OrdersController < ApplicationController

  before_action :require_user

  def index
    if current_user.orders.any?
      @orders = current_user.orders
      render json: @orders
    else
      render json: ["You have no orders"]
    end
  end

  def show
    if current_user.orders.any?
      @order = current_user.orders.find(params[:id])
      render json: @order
    else
      render json: ["This order does not exist"]
    end
  end

  def destroy
    @order = Order.find(params[:id])
    @order.destroy
  end
end
