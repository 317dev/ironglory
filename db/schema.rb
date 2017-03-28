# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170328191734) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string   "street"
    t.string   "street_two"
    t.string   "city"
    t.string   "state"
    t.integer  "zip_code"
    t.integer  "user_id"
    t.integer  "order_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_addresses_on_order_id", using: :btree
    t.index ["user_id"], name: "index_addresses_on_user_id", using: :btree
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orderings", force: :cascade do |t|
    t.integer  "order_id"
    t.integer  "patch_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "quantity"
    t.index ["order_id"], name: "index_orderings_on_order_id", using: :btree
    t.index ["patch_id"], name: "index_orderings_on_patch_id", using: :btree
  end

  create_table "orders", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.boolean  "processed",  default: false
    t.index ["user_id"], name: "index_orders_on_user_id", using: :btree
  end

  create_table "patches", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "sku"
    t.integer  "price"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.integer  "year_id"
    t.integer  "category_id"
    t.boolean  "featured",        default: false
    t.integer  "quantity"
    t.boolean  "limited_edition"
    t.index ["category_id"], name: "index_patches_on_category_id", using: :btree
    t.index ["year_id"], name: "index_patches_on_year_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "phone_number"
    t.string   "password_digest"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.integer  "year_id"
    t.integer  "category_id"
    t.boolean  "admin",           default: false
    t.string   "token"
    t.string   "username"
    t.index ["category_id"], name: "index_users_on_category_id", using: :btree
    t.index ["year_id"], name: "index_users_on_year_id", using: :btree
  end

  create_table "years", force: :cascade do |t|
    t.integer  "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "addresses", "orders"
  add_foreign_key "addresses", "users"
  add_foreign_key "orderings", "orders"
  add_foreign_key "orderings", "patches"
  add_foreign_key "orders", "users"
  add_foreign_key "patches", "categories"
  add_foreign_key "patches", "years"
  add_foreign_key "users", "categories"
  add_foreign_key "users", "years"
end
