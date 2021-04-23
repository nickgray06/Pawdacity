class WalkersController < ApplicationController

  def index
    @walkers = Walker.all

    render json: @walkers
  end

  def show 
    @walker = Walker.find(params[:id])

    render json: @walker
  end

  def add_review
    @walker = Walker.find(params[:id])

    @walker.reviews.create(score: params[:score])

    render json: @walker
  end

end
