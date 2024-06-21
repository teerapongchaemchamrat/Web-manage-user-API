UPDATE  [dbo].[computer]
SET     
        [user_id] = @user_id,
        [moniter_brand] = @moniter_brand,
        [moniter_service] = @moniter_service,
        [moniter_serial] = @moniter_serial,
        [key_brand] = @key_brand,
        [key_serial] = @key_serial,
        [mouse_brand] = @mouse_brand,
        [mouse_serial] = @moniter_serial,
        [os] = @os,
        [office_version] = @office_version,
        [office_key] = @office_key,
        [office_acc] = @office_acc,
        [office_pass] = @office_pass,
        [location] = @location,
        [update_by] = @update_by,
        [update_last] = CURRENT_TIMESTAMP

WHERE [case_service] = @case_service AND [company] = 'TKG'