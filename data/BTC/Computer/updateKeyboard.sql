UPDATE  [dbo].[computer]
SET     
        [key_brand] = @key_brand,
        [key_serial] = @key_serial,
        [update_by] = @update_by,
        [update_last] = CURRENT_TIMESTAMP

WHERE [case_service] = @case_service AND [company] = 'BTC'