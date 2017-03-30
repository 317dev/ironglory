class PatchesController < ApplicationController

  def index
    @patches = Patch.all
    render json: @patches
  end

  def show
    @patch = Patch.find(params[:id])
    render json: @patch
  end
end
