class OrdersController < ApplicationController

  def index
    if current_user
      if current_user.orders.any?
        @orders = current_user.orders
        render json: @orders
      else
        render json: ["You have no orders"]
      end
    else
      @orders = Order.all
      render json: @orders
    end
  end

  def show
    if current_user
      if current_user.orders.any?
        @order = current_user.orders.find_by(token: params[:token])
        render json: @order
      else
        render json: ["This order does not exist"]
      end
    else
      @order = Order.find_by(token: params[:token])
      render json: @order
    end
  end

  def destroy
    if current_user
      @order = current_user.orders.find_by(token: params[:token])
    else
      @order = Order.find_by(token: params[:token])
    end
    @order.destroy
  end

end
