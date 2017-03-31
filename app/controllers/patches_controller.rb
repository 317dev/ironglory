class PatchesController < ApplicationController

  def index
    @patches = Patch.all
    render json: @patches
  end

  def show
    @patch = Patch.find(params[:id])
    @patch.convert_price_from_pennies
    render json: @patch
  end

  def create
    @patch = Patch.new(patch_params)
    if @patch.save
      render json: @patch
    else
      render json: @patch.errors.full_messages, status: 400
    end
  end

  def destroy
    @patch = Patch.find(params[:id])
    @patch.destroy
  end

  private

  def patch_params
    params.permit(:name, :description, :sku, :price, :year, :category, :featured, :quantity, :limited_edition, :image)
  end
end
