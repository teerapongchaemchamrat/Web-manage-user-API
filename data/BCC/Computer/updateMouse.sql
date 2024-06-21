UPDATE  [dbo].[computer]
SET     
        [mouse_brand] = @mouse_brand,
        [mouse_serial] = @mouse_serial,
        [update_by] = @update_by,
        [update_last] = CURRENT_TIMESTAMP

WHERE [case_service] = @case_service AND [company] = 'BCC'