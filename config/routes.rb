Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope :api do
    resources :patches
    resources :users do
      resources :orders
    end
    post '/login' => 'sessions#create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
