Rails.application.routes.draw do
  resources :reviews
  
  resources :walkers do
    post 'add_review', on: :member
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
