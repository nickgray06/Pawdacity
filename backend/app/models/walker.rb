class Walker < ApplicationRecord
  has_many :reviews

  def avg_rev
    if reviews.average(:score).nil?
      return nil
    else
      reviews.average(:score).round(1).to_f
    end
  end

  def as_json(options = nil)
    super(options).merge(:avg_rev => avg_rev)
  end

end
