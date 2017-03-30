class PatchesController < ApplicationController

  before_save :convert_price_to_pennies
  before_action :convert_price_from_pennies, only: [:index, :show]

  def index
    @patches = Patch.all
    render json: @patches
  end

  def show
    @patch = Patch.find(params[:id])
    @patch.price *= 100
    render json: @patch
  end

  def create
  end

  private

  def convert_price_to_pennies
    price * 100
  end

  def convert_price_from_pennies
    price * 100
  end
end
