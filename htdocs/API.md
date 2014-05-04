Secret Santa REST API TODOs


/api/list/:hash/ (GET)
    Returns all list details required for managing a list

/api/list/ (POST)
    Saves a new list

/api/list/:hash/email/:entryid/resend (POST)
    Resend email for an entry

/api/list/:hash/email/:entryid (PUT)
    Update email for an entry

/api/list/:hash/ (DELETE)
    Deletes a list

/api/entry/:hash/ (GET)
    Returns all details for a specific entry, required for showing to this entry

/api/entry/:hash/wishlist (PUT)
    Updates a wishlist

