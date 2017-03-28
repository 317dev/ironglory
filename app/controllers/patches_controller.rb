class PatchesController < ApplicationController

  def index
    @patches = Patch.all
  end
end
