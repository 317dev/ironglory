Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope :api do

    resources :patches

    resources :orders do
      resources :orderings
    end

    resources :users do
      resources :orders do
        resources :orderings
      end
    end
    
    post '/login' => 'sessions#create'
  end
end
