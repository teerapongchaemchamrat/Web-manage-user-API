UPDATE  [dbo].[computer]
SET     
        [moniter_brand] = @moniter_brand,
        [moniter_service] = @moniter_service,
        [moniter_serial] = @moniter_serial,
        [update_by] = @update_by,
        [update_last] = CURRENT_TIMESTAMP

WHERE [case_service] = @case_service AND [company] = 'BTC'