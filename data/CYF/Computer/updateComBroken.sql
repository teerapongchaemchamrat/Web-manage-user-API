UPDATE [dbo].[computer]
SET 
    [status] = 0 ,
    [update_by] = @update_by,
    [update_last] = CURRENT_TIMESTAMP
    
WHERE [case_service] = @case_service