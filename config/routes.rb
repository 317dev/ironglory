Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope :api do
    resources :patches
    resources :users do
      resources :orders
    end
    post '/login' => 'sessions#create'
  end
end
