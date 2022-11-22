class Comment < ApplicationRecord
  belongs_to :post
end

# Post.first.comments