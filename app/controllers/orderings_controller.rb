class OrderingsController < ApplicationController

  def create
    line_item = current_order.orderings.new(line_item_params)
    if line_item.save
      render json: current_order
    else
      render json: line_item.errors.full_messages, status: 400
    end
  end

  def update
    line_item = current_order.orderings.find(params[:id])
    if item.update(params[:quantity])
      render json: current_order
    else
      render json: line_item.errors.full_messages, status: 400
    end
  end

  def destroy
    line_item = current_order.orderings.find(params[:id])
    line_item.destroy
    render json: current_order
  end

  private

  def line_item_params
    params.permit(:patch_id, :quantity)
  end
end
